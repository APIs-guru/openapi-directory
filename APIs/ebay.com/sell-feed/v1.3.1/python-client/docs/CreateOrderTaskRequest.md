# CreateOrderTaskRequest

The type that defines the fields for the <b> createOrderTask</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_type** | **str** | The feed type associated with the task. The only presently supported value is &lt;code&gt;LMS_ORDER_REPORT&lt;/code&gt;. See &lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Report download feed types&lt;/a&gt; for more information. | [optional] 
**filter_criteria** | [**OrderFilterCriteria**](OrderFilterCriteria.md) |  | [optional] 
**schema_version** | **str** | The schema version of the LMS OrderReport. For the &lt;code&gt;LMS_ORDER_REPORT&lt;/code&gt; feed type, see the &lt;a href&#x3D;\&quot;/devzone/merchant-data/CallRef/OrderReport.html#OrderReport\&quot;&gt;OrderReport&lt;/a&gt; reference page to see the present schema version. The &lt;b&gt; schemaVersion&lt;/b&gt; value is the version number shown at the top of the &lt;b&gt; OrderReport&lt;/b&gt; page. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Restriction: &lt;/b&gt; This value must be 1113 or higher. The OrderReport schema version is updated about every two weeks. All version numbers are odd numbers (even numbers are skipped). For example, the next release version after &#39;1113&#39; is &#39;1115&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_order_task_request import CreateOrderTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderTaskRequest from a JSON string
create_order_task_request_instance = CreateOrderTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderTaskRequest.to_json())

# convert the object into a dict
create_order_task_request_dict = create_order_task_request_instance.to_dict()
# create an instance of CreateOrderTaskRequest from a dict
create_order_task_request_from_dict = CreateOrderTaskRequest.from_dict(create_order_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


