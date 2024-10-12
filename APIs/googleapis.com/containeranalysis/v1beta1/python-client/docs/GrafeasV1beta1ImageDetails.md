# GrafeasV1beta1ImageDetails

Details of an image occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**derived_image** | [**Derived**](Derived.md) |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1beta1_image_details import GrafeasV1beta1ImageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1beta1ImageDetails from a JSON string
grafeas_v1beta1_image_details_instance = GrafeasV1beta1ImageDetails.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1beta1ImageDetails.to_json())

# convert the object into a dict
grafeas_v1beta1_image_details_dict = grafeas_v1beta1_image_details_instance.to_dict()
# create an instance of GrafeasV1beta1ImageDetails from a dict
grafeas_v1beta1_image_details_from_dict = GrafeasV1beta1ImageDetails.from_dict(grafeas_v1beta1_image_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


