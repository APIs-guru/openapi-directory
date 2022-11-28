import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedNamedQueryId
/** 
 * Information about a named query ID that could not be processed.
**/
export class UnprocessedNamedQueryId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;
}
