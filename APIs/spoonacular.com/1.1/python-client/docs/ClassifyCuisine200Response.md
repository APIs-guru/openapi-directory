# ClassifyCuisine200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** |  | 
**cuisine** | **str** |  | 
**cuisines** | **List[str]** |  | 

## Example

```python
from openapi_client.models.classify_cuisine200_response import ClassifyCuisine200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyCuisine200Response from a JSON string
classify_cuisine200_response_instance = ClassifyCuisine200Response.from_json(json)
# print the JSON string representation of the object
print(ClassifyCuisine200Response.to_json())

# convert the object into a dict
classify_cuisine200_response_dict = classify_cuisine200_response_instance.to_dict()
# create an instance of ClassifyCuisine200Response from a dict
classify_cuisine200_response_from_dict = ClassifyCuisine200Response.from_dict(classify_cuisine200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


