# ClassicMobileServiceCollection

Collection of Classic Mobile Services

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[ClassicMobileService]**](ClassicMobileService.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.classic_mobile_service_collection import ClassicMobileServiceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ClassicMobileServiceCollection from a JSON string
classic_mobile_service_collection_instance = ClassicMobileServiceCollection.from_json(json)
# print the JSON string representation of the object
print(ClassicMobileServiceCollection.to_json())

# convert the object into a dict
classic_mobile_service_collection_dict = classic_mobile_service_collection_instance.to_dict()
# create an instance of ClassicMobileServiceCollection from a dict
classic_mobile_service_collection_from_dict = ClassicMobileServiceCollection.from_dict(classic_mobile_service_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


