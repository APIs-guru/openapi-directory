# RecipientAccountReference

<span class=\"tablenote\"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **str** | &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note&lt;/b&gt;: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.&lt;/span&gt; | [optional] 
**reference_type** | **str** | &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note&lt;/b&gt;: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.&lt;/span&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:RecipientAccountReferenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.recipient_account_reference import RecipientAccountReference

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAccountReference from a JSON string
recipient_account_reference_instance = RecipientAccountReference.from_json(json)
# print the JSON string representation of the object
print(RecipientAccountReference.to_json())

# convert the object into a dict
recipient_account_reference_dict = recipient_account_reference_instance.to_dict()
# create an instance of RecipientAccountReference from a dict
recipient_account_reference_from_dict = RecipientAccountReference.from_dict(recipient_account_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


