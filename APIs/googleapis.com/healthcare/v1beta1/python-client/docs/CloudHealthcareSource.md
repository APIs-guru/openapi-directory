# CloudHealthcareSource

Cloud Healthcare API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Full path of a Cloud Healthcare API resource. | [optional] 

## Example

```python
from openapi_client.models.cloud_healthcare_source import CloudHealthcareSource

# TODO update the JSON string below
json = "{}"
# create an instance of CloudHealthcareSource from a JSON string
cloud_healthcare_source_instance = CloudHealthcareSource.from_json(json)
# print the JSON string representation of the object
print(CloudHealthcareSource.to_json())

# convert the object into a dict
cloud_healthcare_source_dict = cloud_healthcare_source_instance.to_dict()
# create an instance of CloudHealthcareSource from a dict
cloud_healthcare_source_from_dict = CloudHealthcareSource.from_dict(cloud_healthcare_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


