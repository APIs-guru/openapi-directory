import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NamespaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticated" })
  authenticated?: boolean;

  @Metadata({ data: "json, name=created" })
  created?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: number;

  @Metadata({ data: "json, name=persistLast" })
  persistLast?: boolean;

  @Metadata({ data: "json, name=persisted" })
  persisted?: boolean;

  @Metadata({ data: "json, name=pushEnabled" })
  pushEnabled?: boolean;

  @Metadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}
