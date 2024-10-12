# APICounty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**county_name** | **str** | County in which the school or district is located | [optional] 
**county_url** | **str** | SchoolDigger URL for all schools in this county | [optional] 

## Example

```python
from openapi_client.models.api_county import APICounty

# TODO update the JSON string below
json = "{}"
# create an instance of APICounty from a JSON string
api_county_instance = APICounty.from_json(json)
# print the JSON string representation of the object
print(APICounty.to_json())

# convert the object into a dict
api_county_dict = api_county_instance.to_dict()
# create an instance of APICounty from a dict
api_county_from_dict = APICounty.from_dict(api_county_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


