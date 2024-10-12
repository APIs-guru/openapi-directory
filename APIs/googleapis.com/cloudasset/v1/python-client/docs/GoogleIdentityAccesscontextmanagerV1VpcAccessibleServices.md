# GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices

Specifies how APIs are allowed to communicate within the Service Perimeter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_services** | **List[str]** | The list of APIs usable within the Service Perimeter. Must be empty unless &#39;enable_restriction&#39; is True. You can specify a list of individual services, as well as include the &#39;RESTRICTED-SERVICES&#39; value, which automatically includes all of the services protected by the perimeter. | [optional] 
**enable_restriction** | **bool** | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in &#39;allowed_services&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_vpc_accessible_services import GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices from a JSON string
google_identity_accesscontextmanager_v1_vpc_accessible_services_instance = GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_vpc_accessible_services_dict = google_identity_accesscontextmanager_v1_vpc_accessible_services_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices from a dict
google_identity_accesscontextmanager_v1_vpc_accessible_services_from_dict = GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices.from_dict(google_identity_accesscontextmanager_v1_vpc_accessible_services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


