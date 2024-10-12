# SetupTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_on_setup_failure** | **bool** | If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status. | [optional] 
**tag_name** | **str** | The name of the setup tag. | [optional] 

## Example

```python
from openapi_client.models.setup_tag import SetupTag

# TODO update the JSON string below
json = "{}"
# create an instance of SetupTag from a JSON string
setup_tag_instance = SetupTag.from_json(json)
# print the JSON string representation of the object
print(SetupTag.to_json())

# convert the object into a dict
setup_tag_dict = setup_tag_instance.to_dict()
# create an instance of SetupTag from a dict
setup_tag_from_dict = SetupTag.from_dict(setup_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


