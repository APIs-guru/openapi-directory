# CloudExportAdditionalProperties

Product property for the Cloud Retail API. For example, properties for a TV product could be \"Screen-Resolution\" or \"Screen-Size\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Boolean value of the given property. For example for a TV product, \&quot;True\&quot; or \&quot;False\&quot; if the screen is UHD. | [optional] 
**float_value** | **List[float]** | Float values of the given property. For example for a TV product 1.2345. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. | [optional] 
**int_value** | **List[str]** | Integer values of the given property. For example, 1080 for a screen resolution of a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. | [optional] 
**max_value** | **float** | Maximum float value of the given property. For example for a TV product 100.00. | [optional] 
**min_value** | **float** | Minimum float value of the given property. For example for a TV product 1.00. | [optional] 
**property_name** | **str** | Name of the given property. For example, \&quot;Screen-Resolution\&quot; for a TV product. Maximum string size is 256 characters. | [optional] 
**text_value** | **List[str]** | Text value of the given property. For example, \&quot;8K(UHD)\&quot; could be a text value for a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters. | [optional] 
**unit_code** | **str** | Unit of the given property. For example, \&quot;Pixels\&quot; for a TV product. Maximum string size is 256 bytes. | [optional] 

## Example

```python
from openapi_client.models.cloud_export_additional_properties import CloudExportAdditionalProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudExportAdditionalProperties from a JSON string
cloud_export_additional_properties_instance = CloudExportAdditionalProperties.from_json(json)
# print the JSON string representation of the object
print(CloudExportAdditionalProperties.to_json())

# convert the object into a dict
cloud_export_additional_properties_dict = cloud_export_additional_properties_instance.to_dict()
# create an instance of CloudExportAdditionalProperties from a dict
cloud_export_additional_properties_from_dict = CloudExportAdditionalProperties.from_dict(cloud_export_additional_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


