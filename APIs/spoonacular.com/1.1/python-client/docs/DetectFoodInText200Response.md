# DetectFoodInText200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[DetectFoodInText200ResponseAnnotationsInner]**](DetectFoodInText200ResponseAnnotationsInner.md) |  | 

## Example

```python
from openapi_client.models.detect_food_in_text200_response import DetectFoodInText200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DetectFoodInText200Response from a JSON string
detect_food_in_text200_response_instance = DetectFoodInText200Response.from_json(json)
# print the JSON string representation of the object
print(DetectFoodInText200Response.to_json())

# convert the object into a dict
detect_food_in_text200_response_dict = detect_food_in_text200_response_instance.to_dict()
# create an instance of DetectFoodInText200Response from a dict
detect_food_in_text200_response_from_dict = DetectFoodInText200Response.from_dict(detect_food_in_text200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


