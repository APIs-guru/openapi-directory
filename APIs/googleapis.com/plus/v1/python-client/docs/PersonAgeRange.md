# PersonAgeRange

The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **int** | The age range&#39;s upper bound, if any. Possible values include, but are not limited to, the following:   - \&quot;17\&quot; - for age 17  - \&quot;20\&quot; - for age 20 | [optional] 
**min** | **int** | The age range&#39;s lower bound, if any. Possible values include, but are not limited to, the following:   - \&quot;21\&quot; - for age 21  - \&quot;18\&quot; - for age 18 | [optional] 

## Example

```python
from openapi_client.models.person_age_range import PersonAgeRange

# TODO update the JSON string below
json = "{}"
# create an instance of PersonAgeRange from a JSON string
person_age_range_instance = PersonAgeRange.from_json(json)
# print the JSON string representation of the object
print(PersonAgeRange.to_json())

# convert the object into a dict
person_age_range_dict = person_age_range_instance.to_dict()
# create an instance of PersonAgeRange from a dict
person_age_range_from_dict = PersonAgeRange.from_dict(person_age_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


