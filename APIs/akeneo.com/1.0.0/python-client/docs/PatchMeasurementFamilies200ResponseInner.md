# PatchMeasurementFamilies200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Resource code | [optional] 
**errors** | [**List[PatchMeasurementFamilies200ResponseInnerErrorsInner]**](PatchMeasurementFamilies200ResponseInnerErrorsInner.md) | List of errors | [optional] 
**message** | **str** | Message explaining the error | [optional] 
**status_code** | **int** | HTTP status code, see &lt;a href&#x3D;\&quot;/documentation/responses.html#client-errors\&quot;&gt;Client errors&lt;/a&gt; to understand the meaning of each code | [optional] 

## Example

```python
from openapi_client.models.patch_measurement_families200_response_inner import PatchMeasurementFamilies200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of PatchMeasurementFamilies200ResponseInner from a JSON string
patch_measurement_families200_response_inner_instance = PatchMeasurementFamilies200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(PatchMeasurementFamilies200ResponseInner.to_json())

# convert the object into a dict
patch_measurement_families200_response_inner_dict = patch_measurement_families200_response_inner_instance.to_dict()
# create an instance of PatchMeasurementFamilies200ResponseInner from a dict
patch_measurement_families200_response_inner_from_dict = PatchMeasurementFamilies200ResponseInner.from_dict(patch_measurement_families200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


