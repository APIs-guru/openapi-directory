# GetOrganizationBrandingPolicies200ResponseInnerHelpSettings

      Settings for describing the modifications to various Help page features. Each property in this object accepts one of       'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show       the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on       Dashboard; see the documentation for each property to see the allowed values. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_docs_subtab** | **str** |       The &#39;Help -&gt; API docs&#39; subtab where a detailed description of the Dashboard API is listed. Can be one of       &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**cases_subtab** | **str** |       The &#39;Help -&gt; Cases&#39; Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one       of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**cisco_meraki_product_documentation** | **str** |       The &#39;Product Manuals&#39; section of the &#39;Help -&gt; Get Help&#39; subtab. Can be one of &#39;default or inherit&#39;, &#39;hide&#39;, &#39;show&#39;, or a replacement custom HTML string.  | [optional] 
**community_subtab** | **str** |       The &#39;Help -&gt; Community&#39; subtab which provides a link to Meraki Community. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**data_protection_requests_subtab** | **str** |       The &#39;Help -&gt; Data protection requests&#39; Dashboard subtab on which requests to delete, restrict, or export end-user data can       be audited. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**firewall_info_subtab** | **str** |       The &#39;Help -&gt; Firewall info&#39; subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are       listed. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**get_help_subtab** | **str** |       The &#39;Help -&gt; Get Help&#39; subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note       that if this subtab is hidden, branding customizations for the KB on &#39;Get help&#39;, Cisco Meraki product documentation,       and support contact info will not be visible. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**get_help_subtab_knowledge_base_search** | **str** |       The KB search box which appears on the Help page. Can be one of &#39;default or inherit&#39;, &#39;hide&#39;, &#39;show&#39;, or a replacement custom HTML string.  | [optional] 
**hardware_replacements_subtab** | **str** |       The &#39;Help -&gt; Replacement info&#39; subtab where important information regarding device replacements is detailed. Can be one of       &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**help_tab** | **str** |       The Help tab, under which all support information resides. If this tab is hidden, no other &#39;Help&#39; branding       customizations will be visible. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**help_widget** | **str** |       The &#39;Help Widget&#39; is a support widget which provides access to live chat, documentation links, Sales contact info,       and other contact avenues to reach Meraki Support. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**new_features_subtab** | **str** |       The &#39;Help -&gt; New features&#39; subtab where new Dashboard features are detailed. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**sm_forums** | **str** |       The &#39;SM Forums&#39; subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for       organizations that contain Systems Manager networks. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 
**support_contact_info** | **str** |       The &#39;Contact Meraki Support&#39; section of the &#39;Help -&gt; Get Help&#39; subtab. Can be one of &#39;default or inherit&#39;, &#39;hide&#39;, &#39;show&#39;, or a replacement custom HTML string.  | [optional] 
**universal_search_knowledge_base_search** | **str** |       The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures       whether these Meraki KB results should be returned. Can be one of &#39;default or inherit&#39;, &#39;hide&#39; or &#39;show&#39;.  | [optional] 

## Example

```python
from openapi_client.models.get_organization_branding_policies200_response_inner_help_settings import GetOrganizationBrandingPolicies200ResponseInnerHelpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerHelpSettings from a JSON string
get_organization_branding_policies200_response_inner_help_settings_instance = GetOrganizationBrandingPolicies200ResponseInnerHelpSettings.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationBrandingPolicies200ResponseInnerHelpSettings.to_json())

# convert the object into a dict
get_organization_branding_policies200_response_inner_help_settings_dict = get_organization_branding_policies200_response_inner_help_settings_instance.to_dict()
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerHelpSettings from a dict
get_organization_branding_policies200_response_inner_help_settings_from_dict = GetOrganizationBrandingPolicies200ResponseInnerHelpSettings.from_dict(get_organization_branding_policies200_response_inner_help_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


