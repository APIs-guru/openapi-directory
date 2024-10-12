# EnumKVPType

Used to describe the contents of the KVP data.   The general.* and raw.* types are pretty much what they say on the tin.   All raw.* fields will be base64 encoded so as to not interfere with JSON structuring. These are useful for returning/storing large quantities of data that doesn't necessarily require processing now, or may be useful to a calling client.  The id.* and pii.* are used to indicate that this is data that can be used to create new document objects, or entities. They should also be treated with the utmost care and attention when it comes to securing them too.  id.external can be used to capture an object's ID on an external service, and can potentially be searchable in the index  Note - This is different from a result.id.  defunct is used to mark an existing KVP deleted when the value must be retained, for example for audit purposes.  result.* are used to capture response codes and transaction IDs from external services  error.* types can be used when processing a document that returns an error, but doesn't necessarily require a full blown error response. 

## Enum

* `DEFUNCT` (value: `'defunct'`)

* `GENERAL_DOT_STRING` (value: `'general.string'`)

* `GENERAL_DOT_INTEGER` (value: `'general.integer'`)

* `GENERAL_DOT_FLOAT` (value: `'general.float'`)

* `GENERAL_DOT_BOOL` (value: `'general.bool'`)

* `GENERAL_DOT_DATE` (value: `'general.date'`)

* `GENERAL_DOT_DATETIME` (value: `'general.datetime'`)

* `RAW_DOT_JSON_DOT_BASE64` (value: `'raw.json.base64'`)

* `RAW_DOT_XML_DOT_BASE64` (value: `'raw.xml.base64'`)

* `RAW_DOT_BASE64` (value: `'raw.base64'`)

* `ERROR_DOT_CODE` (value: `'error.code'`)

* `ERROR_DOT_MESSAGE` (value: `'error.message'`)

* `RESULT_DOT_CODE` (value: `'result.code'`)

* `RESULT_DOT_ID` (value: `'result.id'`)

* `ID_DOT_EXTERNAL` (value: `'id.external'`)

* `ID_DOT_NUMBER_DOT_PRIMARY` (value: `'id.number.primary'`)

* `ID_DOT_NUMBER_DOT_ADDITIONAL` (value: `'id.number.additional'`)

* `ID_DOT_MSISDN` (value: `'id.msisdn'`)

* `ID_DOT_EMAIL` (value: `'id.email'`)

* `ID_DOT_DEVICE` (value: `'id.device'`)

* `PII_DOT_NAME_DOT_FULL` (value: `'pii.name.full'`)

* `PII_DOT_NAME_DOT_FAMILYNAME` (value: `'pii.name.familyname'`)

* `PII_DOT_NAME_DOT_GIVENNAME` (value: `'pii.name.givenname'`)

* `PII_DOT_NAME_DOT_MIDDLENAME` (value: `'pii.name.middlename'`)

* `PII_DOT_GENDER` (value: `'pii.gender'`)

* `PII_DOT_ADDRESS_DOT_LONGFORM` (value: `'pii.address.longform'`)

* `PII_DOT_ADDRESS_DOT_STREET1` (value: `'pii.address.street1'`)

* `PII_DOT_ADDRESS_DOT_STREET2` (value: `'pii.address.street2'`)

* `PII_DOT_ADDRESS_DOT_POSTALCODE` (value: `'pii.address.postalcode'`)

* `PII_DOT_ADDRESS_DOT_TOWN` (value: `'pii.address.town'`)

* `PII_DOT_ADDRESS_DOT_SUBURB` (value: `'pii.address.suburb'`)

* `PII_DOT_ADDRESS_DOT_REGION` (value: `'pii.address.region'`)

* `PII_DOT_ADDRESS_DOT_STATE` (value: `'pii.address.state'`)

* `PII_DOT_ADDRESS_DOT_COUNTRY` (value: `'pii.address.country'`)

* `PII_DOT_DOB` (value: `'pii.dob'`)

* `TRANSIENT_DOT_STRING` (value: `'transient.string'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


