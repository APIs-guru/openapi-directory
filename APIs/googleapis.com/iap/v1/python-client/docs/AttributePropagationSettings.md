# AttributePropagationSettings

Configuration for propagating attributes to applications protected by IAP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **bool** | Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials. | [optional] 
**expression** | **str** | Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from &#x60;attributes&#x60;: &#x60;attributes.saml_attributes&#x60;, &#x60;attributes.iap_attributes&#x60;. The following functions are supported: - filter &#x60;.filter(, )&#x60;: Returns a subset of &#x60;&#x60; where &#x60;&#x60; is true for every item. - in &#x60; in &#x60;: Returns true if &#x60;&#x60; contains &#x60;&#x60;. - selectByName &#x60;.selectByName()&#x60;: Returns the attribute in &#x60;&#x60; with the given &#x60;&#x60; name, otherwise returns empty. - emitAs &#x60;.emitAs()&#x60;: Sets the &#x60;&#x60; name field to the given &#x60;&#x60; for propagation in selected output credentials. - strict &#x60;.strict()&#x60;: Ignores the &#x60;x-goog-iap-attr-&#x60; prefix for the provided &#x60;&#x60; when propagating with the &#x60;HEADER&#x60; output credential, such as request headers. - append &#x60;.append()&#x60; OR &#x60;.append()&#x60;: Appends the provided &#x60;&#x60; or &#x60;&#x60; to the end of &#x60;&#x60;. Example expression: &#x60;attributes.saml_attributes.filter(x, x.name in [&#39;test&#39;]).append(attributes.iap_attributes.selectByName(&#39;exact&#39;).emitAs(&#39;custom&#39;).strict())&#x60; | [optional] 
**output_credentials** | **List[str]** | Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential. | [optional] 

## Example

```python
from openapi_client.models.attribute_propagation_settings import AttributePropagationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AttributePropagationSettings from a JSON string
attribute_propagation_settings_instance = AttributePropagationSettings.from_json(json)
# print the JSON string representation of the object
print(AttributePropagationSettings.to_json())

# convert the object into a dict
attribute_propagation_settings_dict = attribute_propagation_settings_instance.to_dict()
# create an instance of AttributePropagationSettings from a dict
attribute_propagation_settings_from_dict = AttributePropagationSettings.from_dict(attribute_propagation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


