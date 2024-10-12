# GoogleCloudSecuritycenterV1Property

An individual name-value pair that defines a custom source property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the property for the custom output. | [optional] 
**value_expression** | [**Expr**](Expr.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_property import GoogleCloudSecuritycenterV1Property

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1Property from a JSON string
google_cloud_securitycenter_v1_property_instance = GoogleCloudSecuritycenterV1Property.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1Property.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_property_dict = google_cloud_securitycenter_v1_property_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1Property from a dict
google_cloud_securitycenter_v1_property_from_dict = GoogleCloudSecuritycenterV1Property.from_dict(google_cloud_securitycenter_v1_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


