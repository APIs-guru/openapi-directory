# APIServiceOut

List of API Services

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_in_units** | **int** | Indicates how many units per call this service costs (ex. the number of units per name) | [optional] 
**service_group** | **str** | Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender) | [optional] 
**service_name** | **str** | A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender) | [optional] 

## Example

```python
from openapi_client.models.api_service_out import APIServiceOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIServiceOut from a JSON string
api_service_out_instance = APIServiceOut.from_json(json)
# print the JSON string representation of the object
print(APIServiceOut.to_json())

# convert the object into a dict
api_service_out_dict = api_service_out_instance.to_dict()
# create an instance of APIServiceOut from a dict
api_service_out_from_dict = APIServiceOut.from_dict(api_service_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


