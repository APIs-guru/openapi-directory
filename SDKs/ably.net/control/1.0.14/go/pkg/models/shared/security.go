package shared



type SchemeBearerAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

