# PersonPlacesLivedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **bool** | If \&quot;true\&quot;, this place of residence is this person&#39;s primary residence. | [optional] 
**value** | **str** | A place where this person has lived. For example: \&quot;Seattle, WA\&quot;, \&quot;Near Toronto\&quot;. | [optional] 

## Example

```python
from openapi_client.models.person_places_lived_inner import PersonPlacesLivedInner

# TODO update the JSON string below
json = "{}"
# create an instance of PersonPlacesLivedInner from a JSON string
person_places_lived_inner_instance = PersonPlacesLivedInner.from_json(json)
# print the JSON string representation of the object
print(PersonPlacesLivedInner.to_json())

# convert the object into a dict
person_places_lived_inner_dict = person_places_lived_inner_instance.to_dict()
# create an instance of PersonPlacesLivedInner from a dict
person_places_lived_inner_from_dict = PersonPlacesLivedInner.from_dict(person_places_lived_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


