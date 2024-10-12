# ServiceSasParameters

The parameters to list service SAS credentials of a specific resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonicalized_resource** | **str** | The canonical path to the signed resource. | 
**end_pk** | **str** | The end of partition key. | [optional] 
**end_rk** | **str** | The end of row key. | [optional] 
**key_to_sign** | **str** | The key to sign the account SAS token with. | [optional] 
**rscc** | **str** | The response header override for cache control. | [optional] 
**rscd** | **str** | The response header override for content disposition. | [optional] 
**rsce** | **str** | The response header override for content encoding. | [optional] 
**rscl** | **str** | The response header override for content language. | [optional] 
**rsct** | **str** | The response header override for content type. | [optional] 
**signed_expiry** | **datetime** | The time at which the shared access signature becomes invalid. | [optional] 
**signed_identifier** | **str** | A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table. | [optional] 
**signed_ip** | **str** | An IP address or a range of IP addresses from which to accept requests. | [optional] 
**signed_permission** | **str** | The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). | [optional] 
**signed_protocol** | **str** | The protocol permitted for a request made with the account SAS. | [optional] 
**signed_resource** | **str** | The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s). | [optional] 
**signed_start** | **datetime** | The time at which the SAS becomes valid. | [optional] 
**start_pk** | **str** | The start of partition key. | [optional] 
**start_rk** | **str** | The start of row key. | [optional] 

## Example

```python
from openapi_client.models.service_sas_parameters import ServiceSasParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceSasParameters from a JSON string
service_sas_parameters_instance = ServiceSasParameters.from_json(json)
# print the JSON string representation of the object
print(ServiceSasParameters.to_json())

# convert the object into a dict
service_sas_parameters_dict = service_sas_parameters_instance.to_dict()
# create an instance of ServiceSasParameters from a dict
service_sas_parameters_from_dict = ServiceSasParameters.from_dict(service_sas_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


