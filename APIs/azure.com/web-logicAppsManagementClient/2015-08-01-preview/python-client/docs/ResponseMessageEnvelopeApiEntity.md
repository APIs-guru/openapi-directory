# ResponseMessageEnvelopeApiEntity

Message envelope that contains the common Azure resource manager properties and the resource provider specific content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this              value for GET requests only.              For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename} | [optional] 
**location** | **str** | Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia | [optional] 
**name** | **str** | Name of resource | [optional] 
**plan** | [**ArmPlan**](ArmPlan.md) |  | [optional] 
**properties** | [**ApiEntity**](ApiEntity.md) |  | [optional] 
**sku** | [**SkuDescription**](SkuDescription.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags associated with resource | [optional] 
**type** | **str** | Type of resource e.g Microsoft.Web/sites | [optional] 

## Example

```python
from openapi_client.models.response_message_envelope_api_entity import ResponseMessageEnvelopeApiEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseMessageEnvelopeApiEntity from a JSON string
response_message_envelope_api_entity_instance = ResponseMessageEnvelopeApiEntity.from_json(json)
# print the JSON string representation of the object
print(ResponseMessageEnvelopeApiEntity.to_json())

# convert the object into a dict
response_message_envelope_api_entity_dict = response_message_envelope_api_entity_instance.to_dict()
# create an instance of ResponseMessageEnvelopeApiEntity from a dict
response_message_envelope_api_entity_from_dict = ResponseMessageEnvelopeApiEntity.from_dict(response_message_envelope_api_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


