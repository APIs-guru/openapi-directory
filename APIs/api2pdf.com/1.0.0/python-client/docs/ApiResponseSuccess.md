# ApiResponseSuccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | Cost of the operation (mbIn + mbOut) * $.001 | [optional] 
**mb_in** | **float** | The amount of megabytes of bandwidth used to process the pdf | [optional] 
**mb_out** | **float** | The amount of megabytes of bandwidth generated from the resulting pdf | [optional] 
**pdf** | **str** | A url to the PDF that will exist only for 24 hours | [optional] 
**success** | **bool** | Will be true if the operation suceeded | [optional] 

## Example

```python
from openapi_client.models.api_response_success import ApiResponseSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResponseSuccess from a JSON string
api_response_success_instance = ApiResponseSuccess.from_json(json)
# print the JSON string representation of the object
print(ApiResponseSuccess.to_json())

# convert the object into a dict
api_response_success_dict = api_response_success_instance.to_dict()
# create an instance of ApiResponseSuccess from a dict
api_response_success_from_dict = ApiResponseSuccess.from_dict(api_response_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


