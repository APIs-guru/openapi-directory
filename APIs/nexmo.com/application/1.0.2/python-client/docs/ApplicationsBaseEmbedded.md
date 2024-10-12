# ApplicationsBaseEmbedded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | [**List[Application]**](Application.md) | The collection of your applications. Each object contains information about an an individual application. The public_key is not included in the application information. | [optional] 

## Example

```python
from openapi_client.models.applications_base_embedded import ApplicationsBaseEmbedded

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationsBaseEmbedded from a JSON string
applications_base_embedded_instance = ApplicationsBaseEmbedded.from_json(json)
# print the JSON string representation of the object
print(ApplicationsBaseEmbedded.to_json())

# convert the object into a dict
applications_base_embedded_dict = applications_base_embedded_instance.to_dict()
# create an instance of ApplicationsBaseEmbedded from a dict
applications_base_embedded_from_dict = ApplicationsBaseEmbedded.from_dict(applications_base_embedded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


