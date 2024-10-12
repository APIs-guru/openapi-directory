# TopLevelDomainAgreementOption

Options for retrieving the list of top level domain legal agreements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**for_transfer** | **bool** | If &lt;code&gt;true&lt;/code&gt;, then the list of agreements will include agreements for domain transfer as well; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**include_privacy** | **bool** | If &lt;code&gt;true&lt;/code&gt;, then the list of agreements will include agreements for domain privacy as well; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.top_level_domain_agreement_option import TopLevelDomainAgreementOption

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomainAgreementOption from a JSON string
top_level_domain_agreement_option_instance = TopLevelDomainAgreementOption.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomainAgreementOption.to_json())

# convert the object into a dict
top_level_domain_agreement_option_dict = top_level_domain_agreement_option_instance.to_dict()
# create an instance of TopLevelDomainAgreementOption from a dict
top_level_domain_agreement_option_from_dict = TopLevelDomainAgreementOption.from_dict(top_level_domain_agreement_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


