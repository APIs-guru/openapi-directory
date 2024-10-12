# Lists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **str** |  true or false | [optional] 
**id_board** | **str** | id of the board that the list should be added to | [optional] 
**id_list_source** | **str** | The id of the list to copy into a new list. | [optional] 
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 
**subscribed** | **str** |  true or false | [optional] 

## Example

```python
from openapi_client.models.lists import Lists

# TODO update the JSON string below
json = "{}"
# create an instance of Lists from a JSON string
lists_instance = Lists.from_json(json)
# print the JSON string representation of the object
print(Lists.to_json())

# convert the object into a dict
lists_dict = lists_instance.to_dict()
# create an instance of Lists from a dict
lists_from_dict = Lists.from_dict(lists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


