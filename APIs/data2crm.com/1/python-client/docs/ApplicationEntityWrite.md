# ApplicationEntityWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **str** | Application authorization | [optional] 
**credential** | **object** |  | [optional] 
**description** | **str** | Application description | [optional] 
**type** | **str** | Application platform type | [optional] 

## Example

```python
from openapi_client.models.application_entity_write import ApplicationEntityWrite

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEntityWrite from a JSON string
application_entity_write_instance = ApplicationEntityWrite.from_json(json)
# print the JSON string representation of the object
print(ApplicationEntityWrite.to_json())

# convert the object into a dict
application_entity_write_dict = application_entity_write_instance.to_dict()
# create an instance of ApplicationEntityWrite from a dict
application_entity_write_from_dict = ApplicationEntityWrite.from_dict(application_entity_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


