# ActorsMap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **List[str]** | The name of the group to add. This parameter cannot be used with the &#x60;groupId&#x60; parameter. As a group&#39;s name can change, use of &#x60;groupId&#x60; is recommended. | [optional] 
**group_id** | **List[str]** | The ID of the group to add. This parameter cannot be used with the &#x60;group&#x60; parameter. | [optional] 
**user** | **List[str]** | The user account ID of the user to add. | [optional] 

## Example

```python
from openapi_client.models.actors_map import ActorsMap

# TODO update the JSON string below
json = "{}"
# create an instance of ActorsMap from a JSON string
actors_map_instance = ActorsMap.from_json(json)
# print the JSON string representation of the object
print(ActorsMap.to_json())

# convert the object into a dict
actors_map_dict = actors_map_instance.to_dict()
# create an instance of ActorsMap from a dict
actors_map_from_dict = ActorsMap.from_dict(actors_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


