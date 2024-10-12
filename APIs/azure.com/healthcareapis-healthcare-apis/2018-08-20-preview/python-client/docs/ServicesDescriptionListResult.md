# ServicesDescriptionListResult

A list of service description objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of service description objects. | [optional] 
**value** | [**List[ServicesDescription]**](ServicesDescription.md) | A list of service description objects. | [optional] 

## Example

```python
from openapi_client.models.services_description_list_result import ServicesDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesDescriptionListResult from a JSON string
services_description_list_result_instance = ServicesDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(ServicesDescriptionListResult.to_json())

# convert the object into a dict
services_description_list_result_dict = services_description_list_result_instance.to_dict()
# create an instance of ServicesDescriptionListResult from a dict
services_description_list_result_from_dict = ServicesDescriptionListResult.from_dict(services_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


