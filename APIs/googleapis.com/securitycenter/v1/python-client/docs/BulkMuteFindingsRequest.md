# BulkMuteFindingsRequest

Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Expression that identifies findings that should be updated. The expression is a list of zero or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. | [optional] 
**mute_annotation** | **str** | This can be a mute configuration name or any identifier for mute/unmute of findings based on the filter. | [optional] 

## Example

```python
from openapi_client.models.bulk_mute_findings_request import BulkMuteFindingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkMuteFindingsRequest from a JSON string
bulk_mute_findings_request_instance = BulkMuteFindingsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkMuteFindingsRequest.to_json())

# convert the object into a dict
bulk_mute_findings_request_dict = bulk_mute_findings_request_instance.to_dict()
# create an instance of BulkMuteFindingsRequest from a dict
bulk_mute_findings_request_from_dict = BulkMuteFindingsRequest.from_dict(bulk_mute_findings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


