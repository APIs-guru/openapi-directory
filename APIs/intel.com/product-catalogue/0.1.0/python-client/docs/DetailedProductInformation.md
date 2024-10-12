# DetailedProductInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[DetailedProductInformationResultInner]**](DetailedProductInformationResultInner.md) | Product info for a locale. | [optional] 
**status** | **str** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.detailed_product_information import DetailedProductInformation

# TODO update the JSON string below
json = "{}"
# create an instance of DetailedProductInformation from a JSON string
detailed_product_information_instance = DetailedProductInformation.from_json(json)
# print the JSON string representation of the object
print(DetailedProductInformation.to_json())

# convert the object into a dict
detailed_product_information_dict = detailed_product_information_instance.to_dict()
# create an instance of DetailedProductInformation from a dict
detailed_product_information_from_dict = DetailedProductInformation.from_dict(detailed_product_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


