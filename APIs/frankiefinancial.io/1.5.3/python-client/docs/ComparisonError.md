# ComparisonError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_date** | **str** | Timestamp of when the attempted comparison took place | 
**correlation_id** | **str** | The correlationId as passed in the request | 
**error_code** | **int** | * &#x60;1000&#x60; - Document not recognised (i.e. not valid pdf or image) * &#x60;1001&#x60; - Bill is not SME or Domestic * &#x60;1004&#x60; - Bill is gas (if to be excluded) * &#x60;1005&#x60; - Template Not Found – The document was a pdf but service did not recognise the uploaded document against any of it’s templates * &#x60;1008&#x60; - Unsupported distributor – bill is from jurisdiction that is unsupported * &#x60;1009&#x60; - Unsupported distributor – bill is from jurisdiction that is unsupported * &#x60;1030&#x60; - Invoice from date is missing * &#x60;1031&#x60; - Invoice to date is missing * &#x60;1033&#x60; - Supply address is missing * &#x60;1039&#x60; - NMI is missing * &#x60;1041&#x60; - Bill is a predictive plan making comparison hard * &#x60;1044&#x60; - Bill is on embedded network * &#x60;1045&#x60; - Incompatible charge item – manual comparison needed * &#x60;1062&#x60; - C&amp;I Bill loaded * &#x60;1080&#x60; - API failed to reconcile bill usually meaning that not all cost items were picked up  | 
**message** | **str** | Description of error that can be displayed as user feedback. e.g. \&quot;Uploaded document not a PDF\&quot; | 
**version** | **str** | Version of the API on which the error took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.comparison_error import ComparisonError

# TODO update the JSON string below
json = "{}"
# create an instance of ComparisonError from a JSON string
comparison_error_instance = ComparisonError.from_json(json)
# print the JSON string representation of the object
print(ComparisonError.to_json())

# convert the object into a dict
comparison_error_dict = comparison_error_instance.to_dict()
# create an instance of ComparisonError from a dict
comparison_error_from_dict = ComparisonError.from_dict(comparison_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


