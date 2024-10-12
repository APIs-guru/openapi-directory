# AirportResourceMeta

Container for meta links.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** |  | [optional] 
**link** | [**List[Link]**](Link.md) | Array: links to resource itself and other related resources. | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.airport_resource_meta import AirportResourceMeta

# TODO update the JSON string below
json = "{}"
# create an instance of AirportResourceMeta from a JSON string
airport_resource_meta_instance = AirportResourceMeta.from_json(json)
# print the JSON string representation of the object
print(AirportResourceMeta.to_json())

# convert the object into a dict
airport_resource_meta_dict = airport_resource_meta_instance.to_dict()
# create an instance of AirportResourceMeta from a dict
airport_resource_meta_from_dict = AirportResourceMeta.from_dict(airport_resource_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


