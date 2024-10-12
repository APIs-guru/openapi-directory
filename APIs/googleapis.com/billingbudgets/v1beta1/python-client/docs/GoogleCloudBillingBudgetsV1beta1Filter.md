# GoogleCloudBillingBudgetsV1beta1Filter

A filter for a budget, limiting the scope of the cost to calculate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_period** | **str** | Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on. | [optional] 
**credit_types** | **List[str]** | Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See [a list of acceptable credit type values](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#credits-type). If Filter.credit_types_treatment is **not** INCLUDE_SPECIFIED_CREDITS, this field must be empty. | [optional] 
**credit_types_treatment** | **str** | Optional. If not set, default behavior is &#x60;INCLUDE_ALL_CREDITS&#x60;. | [optional] 
**custom_period** | [**GoogleCloudBillingBudgetsV1beta1CustomPeriod**](GoogleCloudBillingBudgetsV1beta1CustomPeriod.md) |  | [optional] 
**labels** | **Dict[str, List[object]]** | Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report will include all labeled and unlabeled usage. An object containing a single &#x60;\&quot;key\&quot;: value&#x60; pair. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot; }&#x60;. _Currently, multiple entries or multiple values per entry are not allowed._ | [optional] 
**projects** | **List[str]** | Optional. A set of projects of the form &#x60;projects/{project}&#x60;, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will include all usage for the billing account, regardless of which project the usage occurred on. | [optional] 
**resource_ancestors** | **List[str]** | Optional. A set of folder and organization names of the form &#x60;folders/{folderId}&#x60; or &#x60;organizations/{organizationId}&#x60;, specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget *doesn&#39;t* apply to those projects. | [optional] 
**services** | **List[str]** | Optional. A set of services of the form &#x60;services/{service_id}&#x60;, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api. | [optional] 
**subaccounts** | **List[str]** | Optional. A set of subaccounts of the form &#x60;billingAccounts/{account_id}&#x60;, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If omitted, the report will include usage from the parent account and all subaccounts, if they exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_filter import GoogleCloudBillingBudgetsV1beta1Filter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1Filter from a JSON string
google_cloud_billing_budgets_v1beta1_filter_instance = GoogleCloudBillingBudgetsV1beta1Filter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1Filter.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_filter_dict = google_cloud_billing_budgets_v1beta1_filter_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1Filter from a dict
google_cloud_billing_budgets_v1beta1_filter_from_dict = GoogleCloudBillingBudgetsV1beta1Filter.from_dict(google_cloud_billing_budgets_v1beta1_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


