# APISchoolList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_pages** | **int** | The total count of pages in your query list based on given per_page value | [optional] 
**number_of_schools** | **int** | The total count of schools that match your query | [optional] 
**school_list** | [**List[APISchool1Summary]**](APISchool1Summary.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_school_list import APISchoolList

# TODO update the JSON string below
json = "{}"
# create an instance of APISchoolList from a JSON string
api_school_list_instance = APISchoolList.from_json(json)
# print the JSON string representation of the object
print(APISchoolList.to_json())

# convert the object into a dict
api_school_list_dict = api_school_list_instance.to_dict()
# create an instance of APISchoolList from a dict
api_school_list_from_dict = APISchoolList.from_dict(api_school_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


