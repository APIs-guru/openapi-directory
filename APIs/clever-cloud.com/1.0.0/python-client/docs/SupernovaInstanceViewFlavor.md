# SupernovaInstanceViewFlavor

The instance \"flavor\": memory, cpu, disk size…

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpus** | **float** |  | [optional] 
**mem** | **float** |  | [optional] 
**name** | **str** | Name of flavor. For indication only. | [optional] 
**price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.supernova_instance_view_flavor import SupernovaInstanceViewFlavor

# TODO update the JSON string below
json = "{}"
# create an instance of SupernovaInstanceViewFlavor from a JSON string
supernova_instance_view_flavor_instance = SupernovaInstanceViewFlavor.from_json(json)
# print the JSON string representation of the object
print(SupernovaInstanceViewFlavor.to_json())

# convert the object into a dict
supernova_instance_view_flavor_dict = supernova_instance_view_flavor_instance.to_dict()
# create an instance of SupernovaInstanceViewFlavor from a dict
supernova_instance_view_flavor_from_dict = SupernovaInstanceViewFlavor.from_dict(supernova_instance_view_flavor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


