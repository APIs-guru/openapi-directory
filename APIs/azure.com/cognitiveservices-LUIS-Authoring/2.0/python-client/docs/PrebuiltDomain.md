# PrebuiltDomain

Prebuilt Domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**culture** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**entities** | [**List[PrebuiltDomainItem]**](PrebuiltDomainItem.md) |  | [optional] 
**examples** | **str** |  | [optional] 
**intents** | [**List[PrebuiltDomainItem]**](PrebuiltDomainItem.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.prebuilt_domain import PrebuiltDomain

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltDomain from a JSON string
prebuilt_domain_instance = PrebuiltDomain.from_json(json)
# print the JSON string representation of the object
print(PrebuiltDomain.to_json())

# convert the object into a dict
prebuilt_domain_dict = prebuilt_domain_instance.to_dict()
# create an instance of PrebuiltDomain from a dict
prebuilt_domain_from_dict = PrebuiltDomain.from_dict(prebuilt_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


