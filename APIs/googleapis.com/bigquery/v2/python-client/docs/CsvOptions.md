# CsvOptions

Information related to a CSV data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_jagged_rows** | **bool** | Optional. Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. | [optional] 
**allow_quoted_newlines** | **bool** | Optional. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. | [optional] 
**encoding** | **str** | Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. | [optional] 
**field_delimiter** | **str** | Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence \&quot;\\t\&quot; (U+0009) to specify a tab separator. The default value is comma (\&quot;,\&quot;, U+002C). | [optional] 
**null_marker** | **str** | [Optional] A custom string that will represent a NULL value in CSV import data. | [optional] 
**preserve_ascii_control_characters** | **bool** | Optional. Indicates if the embedded ASCII control characters (the first 32 characters in the ASCII-table, from &#39;\\x00&#39; to &#39;\\x1F&#39;) are preserved. | [optional] 
**quote** | **str** | Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote (\&quot;). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character &#39; \&quot; &#39;, use &#39; \&quot;\&quot; &#39;. | [optional] [default to '"']
**skip_leading_rows** | **str** | Optional. The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows &#x3D; N &gt; 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. | [optional] 

## Example

```python
from openapi_client.models.csv_options import CsvOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CsvOptions from a JSON string
csv_options_instance = CsvOptions.from_json(json)
# print the JSON string representation of the object
print(CsvOptions.to_json())

# convert the object into a dict
csv_options_dict = csv_options_instance.to_dict()
# create an instance of CsvOptions from a dict
csv_options_from_dict = CsvOptions.from_dict(csv_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


