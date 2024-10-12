# RecognizeFile200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_cost** | **int** | The number of API credits that were used to process this image | [optional] 
**credits_monthly_total** | **int** | The maximum number of API credits available this month according to your plan | [optional] 
**credits_monthly_used** | **int** | The number of API credits used this month | [optional] 
**data_type** | **str** | Specifies the type of data in this response | [optional] 
**epoch_time** | **float** | Epoch time that the image was processed in milliseconds | [optional] 
**img_height** | **int** | Height of the input image in pixels | [optional] 
**img_width** | **int** | Width of the uploaded image in pixels | [optional] 
**processing_time** | [**RecognizeFile200ResponseProcessingTime**](RecognizeFile200ResponseProcessingTime.md) |  | [optional] 
**regions_of_interest** | [**List[RegionOfInterest]**](RegionOfInterest.md) | Describes the areas analyzed in the input image | [optional] 
**results** | [**List[PlateDetails]**](PlateDetails.md) |  | [optional] 
**vehicles** | [**List[Vehicles]**](Vehicles.md) | Describes all vehicles found in the input image | [optional] 
**version** | **int** | API format version | [optional] 

## Example

```python
from openapi_client.models.recognize_file200_response import RecognizeFile200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizeFile200Response from a JSON string
recognize_file200_response_instance = RecognizeFile200Response.from_json(json)
# print the JSON string representation of the object
print(RecognizeFile200Response.to_json())

# convert the object into a dict
recognize_file200_response_dict = recognize_file200_response_instance.to_dict()
# create an instance of RecognizeFile200Response from a dict
recognize_file200_response_from_dict = RecognizeFile200Response.from_dict(recognize_file200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


