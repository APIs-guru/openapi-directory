# GetReferenceEntitiesCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetReferenceEntitiesCode200ResponseAllOfLinks**](GetReferenceEntitiesCode200ResponseAllOfLinks.md) |  | [optional] 
**code** | **str** | Reference entity code | 
**image** | **str** | Code of the reference entity image | [optional] 
**labels** | [**ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels**](ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_reference_entities_code200_response import GetReferenceEntitiesCode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReferenceEntitiesCode200Response from a JSON string
get_reference_entities_code200_response_instance = GetReferenceEntitiesCode200Response.from_json(json)
# print the JSON string representation of the object
print(GetReferenceEntitiesCode200Response.to_json())

# convert the object into a dict
get_reference_entities_code200_response_dict = get_reference_entities_code200_response_instance.to_dict()
# create an instance of GetReferenceEntitiesCode200Response from a dict
get_reference_entities_code200_response_from_dict = GetReferenceEntitiesCode200Response.from_dict(get_reference_entities_code200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


