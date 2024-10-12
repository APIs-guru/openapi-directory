# PersonTimezone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**offset** | **str** |  | [optional] 
**timezone_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.person_timezone import PersonTimezone

# TODO update the JSON string below
json = "{}"
# create an instance of PersonTimezone from a JSON string
person_timezone_instance = PersonTimezone.from_json(json)
# print the JSON string representation of the object
print(PersonTimezone.to_json())

# convert the object into a dict
person_timezone_dict = person_timezone_instance.to_dict()
# create an instance of PersonTimezone from a dict
person_timezone_from_dict = PersonTimezone.from_dict(person_timezone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


