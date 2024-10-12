# TeardownTag

Represents a tag that fires after another tag in order to tear down dependencies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_teardown_on_failure** | **bool** | If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. | [optional] 
**tag_name** | **str** | The name of the teardown tag. | [optional] 

## Example

```python
from openapi_client.models.teardown_tag import TeardownTag

# TODO update the JSON string below
json = "{}"
# create an instance of TeardownTag from a JSON string
teardown_tag_instance = TeardownTag.from_json(json)
# print the JSON string representation of the object
print(TeardownTag.to_json())

# convert the object into a dict
teardown_tag_dict = teardown_tag_instance.to_dict()
# create an instance of TeardownTag from a dict
teardown_tag_from_dict = TeardownTag.from_dict(teardown_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


