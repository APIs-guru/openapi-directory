# UpdateLocation

Information related to a location's update status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateLocationModel**](UpdateLocationModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Region location of resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_location import UpdateLocation

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLocation from a JSON string
update_location_instance = UpdateLocation.from_json(json)
# print the JSON string representation of the object
print(UpdateLocation.to_json())

# convert the object into a dict
update_location_dict = update_location_instance.to_dict()
# create an instance of UpdateLocation from a dict
update_location_from_dict = UpdateLocation.from_dict(update_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


