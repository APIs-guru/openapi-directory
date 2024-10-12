# ViewProperties

The properties of the view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accumulated** | **str** | Show costs accumulated over time. | [optional] 
**chart** | **str** | Chart type of the main view in Cost Analysis. Required. | [optional] 
**created_on** | **datetime** | Date the user created this view. | [optional] [readonly] 
**display_name** | **str** | User input name of the view. Required. | [optional] 
**kpis** | [**List[KpiProperties]**](KpiProperties.md) | List of KPIs to show in Cost Analysis UI. | [optional] 
**metric** | **str** | Metric to use when displaying costs. | [optional] 
**modified_on** | **datetime** | Date when the user last modified this view. | [optional] [readonly] 
**pivots** | [**List[PivotProperties]**](PivotProperties.md) | Configuration of 3 sub-views in the Cost Analysis UI. | [optional] 
**query** | [**ReportConfigDefinition**](ReportConfigDefinition.md) |  | [optional] 
**scope** | **str** | Cost Management scope to save the view on. This includes &#39;subscriptions/{subscriptionId}&#39; for subscription scope, &#39;subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for resourceGroup scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}&#39; for Billing Account scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}&#39; for Department scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}&#39; for EnrollmentAccount scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}&#39; for BillingProfile scope, &#39;providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}&#39; for InvoiceSection scope, &#39;providers/Microsoft.Management/managementGroups/{managementGroupId}&#39; for Management Group scope, &#39;/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}&#39; for ExternalBillingAccount scope, and &#39;/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}&#39; for ExternalSubscription scope. | [optional] 

## Example

```python
from openapi_client.models.view_properties import ViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ViewProperties from a JSON string
view_properties_instance = ViewProperties.from_json(json)
# print the JSON string representation of the object
print(ViewProperties.to_json())

# convert the object into a dict
view_properties_dict = view_properties_instance.to_dict()
# create an instance of ViewProperties from a dict
view_properties_from_dict = ViewProperties.from_dict(view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


