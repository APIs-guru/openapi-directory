# ReportTask

This type defines the fields in a report task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_ids** | **List[str]** | A list of IDs for the campaigns that are included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that&#39;s generated when the campaign is created.&lt;br /&gt;&lt;br /&gt;Call &lt;b&gt;getCampaigns&lt;/b&gt; to return the current campaign IDs for a seller. | [optional] 
**date_from** | **str** | The date defining the start of the timespan covered by the report, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html \&quot; title&#x3D;\&quot;https://www.iso.org \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; timestamp. | [optional] 
**date_to** | **str** | The date defining the end of the timespan covered by the report, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html \&quot; title&#x3D;\&quot;https://www.iso.org \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; timestamp. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | A list containing the dimension in the report. | [optional] 
**funding_models** | **List[str]** | The funding model for the campaign that shall be included in the report.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; The default funding model for Promoted Listings reports is &lt;code&gt;COST_PER_SALE&lt;/code&gt;.&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;COST_PER_SALE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;COST_PER_CLICK&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] 
**inventory_references** | [**List[InventoryReference]**](InventoryReference.md) | If supplied in the request, this field returns a list of the seller&#39;s inventory reference IDs included in the report.  &lt;p&gt;Each item is referenced by a pair of &lt;b&gt;inventoryRefernceID&lt;/b&gt; and &lt;b&gt;inventoryReferenceType&lt;/b&gt; values, where an inventory reference ID can be either a seller-defined &lt;b&gt;SKU&lt;/b&gt; value or an &lt;b&gt;inventoryItemGroupKey&lt;/b&gt;. An &lt;b&gt;inventoryItemGroupKey&lt;/b&gt; is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the &lt;a href&#x3D;\&quot;/api-docs/sell/inventory/resources/methods\&quot;&gt;Inventory API&lt;/a&gt;.&lt;/p&gt; | [optional] 
**listing_ids** | **List[str]** | If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that&#39;s generated when a listing is created. | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace used by the report task. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**metric_keys** | **List[str]** | A list of metrics for the report task. | [optional] 
**report_expiration_date** | **str** | The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format (UTC): &lt;/b&gt; yyyy-MM-ddThh:mm:ss.sssZ | [optional] 
**report_format** | **str** | Indicates the format of the report. Currently, only &lt;code&gt;TSV_GZIP&lt;/code&gt; is supported. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**report_href** | **str** | The URL of the generated report, which can be used to download the report once it has been generated. | [optional] 
**report_id** | **str** | A unique eBay-assigned ID for the report. | [optional] 
**report_name** | **str** | An eBay-assigned name for the report that&#39;s created by the &lt;b&gt;createReportTask&lt;/b&gt; call. This name is unique for the seller. | [optional] 
**report_task_completion_date** | **str** | The date the report task completed the report generation.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format (UTC): &lt;/b&gt; yyyy-MM-ddThh:mm:ss.sssZ | [optional] 
**report_task_creation_date** | **str** | The date the report task was created.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format (UTC): &lt;/b&gt; yyyy-MM-ddThh:mm:ss.sssZ | [optional] 
**report_task_expected_completion_date** | **str** | The date the report task is expected to complete the report generation.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format (UTC): &lt;/b&gt; yyyy-MM-ddThh:mm:ss.sssZ | [optional] 
**report_task_id** | **str** | The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to &lt;b&gt;createReportTask&lt;/b&gt;. | [optional] 
**report_task_status** | **str** | Indicates the current state of the report task. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**report_task_status_message** | **str** | A status message with additional information about the report task. | [optional] 
**report_type** | **str** | Indicates type of report associated with the report task.&lt;br/&gt;&lt;br/&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.&lt;/span&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.report_task import ReportTask

# TODO update the JSON string below
json = "{}"
# create an instance of ReportTask from a JSON string
report_task_instance = ReportTask.from_json(json)
# print the JSON string representation of the object
print(ReportTask.to_json())

# convert the object into a dict
report_task_dict = report_task_instance.to_dict()
# create an instance of ReportTask from a dict
report_task_from_dict = ReportTask.from_dict(report_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


