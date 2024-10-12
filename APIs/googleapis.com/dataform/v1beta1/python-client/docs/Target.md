# Target

Represents an action identifier. If the action writes output, the output will be written to the referenced database object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | The action&#39;s database (Google Cloud project ID) . | [optional] 
**name** | **str** | The action&#39;s name, within &#x60;database&#x60; and &#x60;schema&#x60;. | [optional] 
**var_schema** | **str** | The action&#39;s schema (BigQuery dataset ID), within &#x60;database&#x60;. | [optional] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


