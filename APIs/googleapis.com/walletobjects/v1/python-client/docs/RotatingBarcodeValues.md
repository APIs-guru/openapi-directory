# RotatingBarcodeValues

A payload containing many barcode values and start date/time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period_millis** | **str** | Required. The amount of time each barcode is valid for. | [optional] 
**start_date_time** | **str** | Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object&#39;s RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. | [optional] 
**values** | **List[str]** | Required. The values to encode in the barcode. At least one value is required. | [optional] 

## Example

```python
from openapi_client.models.rotating_barcode_values import RotatingBarcodeValues

# TODO update the JSON string below
json = "{}"
# create an instance of RotatingBarcodeValues from a JSON string
rotating_barcode_values_instance = RotatingBarcodeValues.from_json(json)
# print the JSON string representation of the object
print(RotatingBarcodeValues.to_json())

# convert the object into a dict
rotating_barcode_values_dict = rotating_barcode_values_instance.to_dict()
# create an instance of RotatingBarcodeValues from a dict
rotating_barcode_values_from_dict = RotatingBarcodeValues.from_dict(rotating_barcode_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


