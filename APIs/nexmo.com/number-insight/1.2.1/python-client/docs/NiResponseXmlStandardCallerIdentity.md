# NiResponseXmlStandardCallerIdentity

Contains details of the number owner, if `cnam` was set to `true` in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_name** | **str** | Full name of the person or business who owns the phone number. &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**caller_type** | **str** | The value will be &#x60;business&#x60; if the owner of a phone number is a business. If the owner is an individual the value will be &#x60;consumer&#x60;. The value will be &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**caller_name** | **str** | Full name of the person or business who owns the phone number. &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**caller_type** | **str** | The value will be &#x60;business&#x60; if the owner of a phone number is a business. If the owner is an individual the value will be &#x60;consumer&#x60;. The value will be &#x60;unknown&#x60; if this information is not available. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**firs_name** | **str** | First name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**first_name** | **str** | First name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**last_name** | **str** | Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 
**last_name** | **str** | Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if &#x60;cnam&#x60; had a value of &#x60;true&#x60; within the request. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_standard_caller_identity import NiResponseXmlStandardCallerIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlStandardCallerIdentity from a JSON string
ni_response_xml_standard_caller_identity_instance = NiResponseXmlStandardCallerIdentity.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlStandardCallerIdentity.to_json())

# convert the object into a dict
ni_response_xml_standard_caller_identity_dict = ni_response_xml_standard_caller_identity_instance.to_dict()
# create an instance of NiResponseXmlStandardCallerIdentity from a dict
ni_response_xml_standard_caller_identity_from_dict = NiResponseXmlStandardCallerIdentity.from_dict(ni_response_xml_standard_caller_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


