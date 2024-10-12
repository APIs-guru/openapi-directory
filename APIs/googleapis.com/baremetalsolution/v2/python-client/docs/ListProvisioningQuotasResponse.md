# ListProvisioningQuotasResponse

Response message for the list of provisioning quotas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**provisioning_quotas** | [**List[ProvisioningQuota]**](ProvisioningQuota.md) | The provisioning quotas registered in this project. | [optional] 

## Example

```python
from openapi_client.models.list_provisioning_quotas_response import ListProvisioningQuotasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProvisioningQuotasResponse from a JSON string
list_provisioning_quotas_response_instance = ListProvisioningQuotasResponse.from_json(json)
# print the JSON string representation of the object
print(ListProvisioningQuotasResponse.to_json())

# convert the object into a dict
list_provisioning_quotas_response_dict = list_provisioning_quotas_response_instance.to_dict()
# create an instance of ListProvisioningQuotasResponse from a dict
list_provisioning_quotas_response_from_dict = ListProvisioningQuotasResponse.from_dict(list_provisioning_quotas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


