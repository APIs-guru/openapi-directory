# FetchOrganizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OrganizationResource**](OrganizationResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_organization_response import FetchOrganizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchOrganizationResponse from a JSON string
fetch_organization_response_instance = FetchOrganizationResponse.from_json(json)
# print the JSON string representation of the object
print(FetchOrganizationResponse.to_json())

# convert the object into a dict
fetch_organization_response_dict = fetch_organization_response_instance.to_dict()
# create an instance of FetchOrganizationResponse from a dict
fetch_organization_response_from_dict = FetchOrganizationResponse.from_dict(fetch_organization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


