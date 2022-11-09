import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedNamedQueryId
/** 
 * Information about a named query ID that could not be processed.
**/
export class UnprocessedNamedQueryId extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;
}
