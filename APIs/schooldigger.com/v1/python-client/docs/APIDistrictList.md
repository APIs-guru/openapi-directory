# APIDistrictList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district_list** | [**List[APIDistrict1Summary]**](APIDistrict1Summary.md) |  | [optional] 
**number_of_districts** | **int** | The total count of districts that match your query | [optional] 
**number_of_pages** | **int** | The total count of pages in your query list based on given per_page value | [optional] 

## Example

```python
from openapi_client.models.api_district_list import APIDistrictList

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrictList from a JSON string
api_district_list_instance = APIDistrictList.from_json(json)
# print the JSON string representation of the object
print(APIDistrictList.to_json())

# convert the object into a dict
api_district_list_dict = api_district_list_instance.to_dict()
# create an instance of APIDistrictList from a dict
api_district_list_from_dict = APIDistrictList.from_dict(api_district_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


